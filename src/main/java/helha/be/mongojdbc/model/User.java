package helha.be.mongojdbc.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Users") // Nom de la collection dans MongoDB
public class User {
    @Id
    private String id;      // Identifiant unique
    private String name;    // Nom de l'utilisateur
    private int age;        // Âge
    private String studies; // Études
}
