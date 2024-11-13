package helha.be.mongojdbc.repository;

import helha.be.mongojdbc.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}
