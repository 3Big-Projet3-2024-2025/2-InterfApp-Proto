package helha.be.mongojdbc.controllers;

import helha.be.mongojdbc.models.Users;
import helha.be.mongojdbc.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/user")
    public Users addUser(@RequestBody Users users) {
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        this.userRepo.save(users);
        return users;
    }
}
