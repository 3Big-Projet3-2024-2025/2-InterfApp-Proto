package helha.be.mongojdbc.repositories;

import helha.be.mongojdbc.models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<Users, Long> {
    Users findByUsername(String username);

}
