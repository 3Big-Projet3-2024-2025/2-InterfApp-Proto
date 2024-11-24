package helha.be.mongodb.Repository;

import helha.be.mongodb.Model.Form;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormRepository extends MongoRepository<Form, String> {
}
