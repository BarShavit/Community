package socketIO;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketConfig;
import com.google.gson.Gson;
import configurations.SocketIOConfiguration;

public class SocketIOServer implements ISocketIOSender{
    private SocketIOConfiguration configuration;
    private com.corundumstudio.socketio.SocketIOServer server;
    private Gson gson = new Gson();

    public SocketIOServer(SocketIOConfiguration configuration) {
        this.configuration = configuration;
    }

    public void start() {
        var conf = new Configuration();
        conf.setHostname(configuration.getHostName());
        conf.setPort(configuration.getPort());
        conf.setPingTimeout(configuration.getCloseTimeout());

        var socketConfig = new SocketConfig();
        socketConfig.setReuseAddress(true);
        conf.setSocketConfig(socketConfig);

        server = new com.corundumstudio.socketio.SocketIOServer(conf);
        server.start();

        System.out.println(String.format(
                "Started SocketIO server on %s:%s",
                configuration.getHostName(), configuration.getPort()));
    }

    public void emitData(String key, Object data) {
        var json = gson.toJson(data);

        server.getBroadcastOperations().sendEvent(key, json);
    }
}
