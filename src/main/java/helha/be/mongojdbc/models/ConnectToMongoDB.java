package helha.be.mongojdbc.models;

import com.mongodb.client.MongoDatabase;
import com.mongodb.client.*;
import com.mongodb.client.result.InsertOneResult;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mongo")
public class ConnectToMongoDB {

    @PostMapping("/connect")
    public static void main(String[] args) {
        String uri = "mongodb://localhost:27017";
        try {
            MongoClient mongoClient = MongoClients.create(uri);
            MongoDatabase database = mongoClient.getDatabase("mongospring");
            MongoCollection collection = database.getCollection("test");
            System.out.println("Connexion réussie à la base de données");
            // Création d'un document BSON (oui, cela ressemble à du JSON)
            Document doc = new Document("nom", "Pierre")
                    .append("âge", 25)
                    .append("études", "informatique");
            System.out.println(doc.toJson());

            // Insertion du document
            InsertOneResult temp = collection.insertOne(doc);
            ObjectId id = (ObjectId) doc.get("_id");
            System.out.println("ObjectId inséré: " + id.toHexString());
            // On va vérifier si l’oid est bien ajouté
            System.out.println(doc.toJson());
            // Lecture des documents (Read)
            System.out.println("Lecture des documents");
            FindIterable<Document> documents = collection.find();
            for (Document d : documents) {
                System.out.println(d.toJson());
            }
        }
        catch (Exception e) {
            System.out.println("Une erreur est survenue");
            e.printStackTrace();
        }
    }
}
