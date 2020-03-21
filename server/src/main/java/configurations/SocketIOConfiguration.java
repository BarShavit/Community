package configurations;

public class SocketIOConfiguration extends Configuration<SocketIOConfiguration> {
    private String hostName;
    private int port;
    private int closeTimeout;

    @Override
    public String getFilePath() {
        return "./data/SocketIOConfiguration.xml";
    }

    @Override
    protected void setDefault() {
        setHostName("0.0.0.0");
        setPort(8080);
        setCloseTimeout(30);
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public int getCloseTimeout() {
        return closeTimeout;
    }

    public void setCloseTimeout(int closeTimeout) {
        this.closeTimeout = closeTimeout;
    }
}
