package helha.be.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import helha.be.mongodb.Config.MongoConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class MongoConfigTest {

    @Autowired
    private MongoClient mongoClient;

    @Autowired
    private MongoConfig mongoConfig;

    @Test
    public void testMongoClientBeanExists() {
        // Vérifie que le bean MongoClient est créé
        assertThat(mongoClient).isNotNull();
    }

    @Test
    public void testDatabaseConnection() {
        // Vérifie que la connexion à la base de données fonctionne
        String databaseName = mongoConfig.getDatabaseName();
        MongoDatabase database = mongoClient.getDatabase(databaseName);
        assertThat(database).isNotNull();
        assertThat(database.getName()).isEqualTo("ProtoForms");
    }
}
