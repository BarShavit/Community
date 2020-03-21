package configurations;

import java.beans.XMLDecoder;
import java.beans.XMLEncoder;
import java.io.*;
import java.nio.file.Path;

/**
 * Each xml configuration should use this class.
 * You can save or get configuration.
 * If you try get configuration and it fails (like file error) - you set default values
 * and the class will create default file for you.
 * @param <T> Object type
 */
public abstract class Configuration<T> {
    abstract String getFilePath();
    abstract void setDefault();

    public void save() throws FileNotFoundException {
        var directoryPath = Path.of(getFilePath()).getParent();
        var directory = new File(directoryPath.toString());
        if (!directory.exists()){
            if(!directory.mkdirs()){
                throw new FileNotFoundException("Couldn't create directory for file " + getFilePath());
            }
        }

        try (var encoder = new XMLEncoder(new BufferedOutputStream(new FileOutputStream(getFilePath(), false)))) {
            encoder.writeObject(this);

        } catch (FileNotFoundException fileNotFound) {
            System.out.println("ERROR: While Creating or Opening the File " + getFilePath());
        }
    }

    public T Read() throws FileNotFoundException {
        try (var decoder = new XMLDecoder(new BufferedInputStream(new FileInputStream(getFilePath())))) {
            decoder.close();

            //noinspection unchecked
            return (T) decoder.readObject();
        } catch (FileNotFoundException e) {
            // Set default
            setDefault();
            save();

            //noinspection unchecked
            return (T)this;
        }
    }
}