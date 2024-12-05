package helha.be.mongodb.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import helha.be.mongodb.Model.User;
import helha.be.mongodb.Repository.UserRepository;
import helha.be.mongodb.security.JwtUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        user.setRoles("User");
        return userRepository.save(user);
    }

    public String login(String email, String password){
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (!userOptional.isPresent()){return null;}

        User user = userOptional.get();

        if(!user.getPassword().equals(password)){return null;}

        return JwtUtil.generateToken(email, user.getPassword(), user.getRoles());
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
