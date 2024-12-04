//package helha.be.mongojdbc.controllers;
//
//import helha.be.mongojdbc.models.JWT;
//import helha.be.mongojdbc.models.LoginRequest;
////import helha.be.mongojdbc.utils.JWTUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/auth")
//public class AuthentificationController {
//
////    @Autowired
////    JWTUtils jwtUtils;
////
////    @Autowired
////    AuthenticationManager authenticationManager;
////
////    @PostMapping("login")
////    public ResponseEntity<?> authenticate(@RequestBody LoginRequest loginRequest) {
////        try {
////            Authentication auth = authenticationManager.authenticate(
////                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
////            );
////            SecurityContextHolder.getContext().setAuthentication(auth);
////            User user = (User) auth.getPrincipal();
////            JWT jwt = new JWT(jwtUtils.generateAccessToken(user), jwtUtils.generateRefreshToken(user));
////            return ResponseEntity.ok(jwt);
////        } catch (AuthenticationException e) {
////            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid username or password");
////        }
////    }
//
//
//
//}
