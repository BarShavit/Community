package socketIO;

public interface ISocketIOSender {
    void emitData(String key, Object data);
}
