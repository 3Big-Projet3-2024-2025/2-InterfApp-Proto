package helha.be.mongojdbc.controllers;

import helha.be.mongojdbc.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthentificationController {

    @Autowired
    JWTUtils jwtUtils;

    //@Autowired
    AuthenticationManager authenticationManager;

}
