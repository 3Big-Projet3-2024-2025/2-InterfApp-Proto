package helha.be.mongodb.Repository;

import helha.be.mongodb.Model.Reponse;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReponseRepository extends MongoRepository<Reponse, String> {
}
