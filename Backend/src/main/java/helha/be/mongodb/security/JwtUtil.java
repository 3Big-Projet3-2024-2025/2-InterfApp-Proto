package helha.be.mongodb.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

import javax.crypto.SecretKey;

@Component
public class JwtUtil {
    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor("c44c18330360acdbaf9e37229709f9d50afdf0cd7f7d9815d403eb5daa9a5aa50c40eb86b18dd5f9d1a9bcc745d4888abed3c4525586c753ed1a1641631f515342d598200ebffa6cd77bdbdc102e5820b37f8959178ba0d6e46c87b0161c9d2b8473d517be26ba9bae074888df933c51cd1dd924c576bf9144aaace3a4567612e1f703663ca07ac369fce57d0f21108d64818c4eb13f0d73655a2d77e49aa0f6e48d435485798f6dd545df06dbaa1162f726e0ba44762b6f4fce747a662978ca0dc9c7be38c147a657af3dc57861ef5230c2931dcf70ffac6bfcc139c6f00ff2e31011ee7adf40b5587889395622e3b6daa9fc3094c93345bbb86d1ac77f2114".getBytes());

    public static String generateToken(String email, String userId, String roles) {
        long expirationTimeMillis = 3600000L; // 1 hour in milliseconds
        Date now = new Date();
        Date expiration = new Date(now.getTime() + expirationTimeMillis);

        return Jwts.builder()
                .subject(userId)
                .issuedAt(now)
                .expiration(expiration)
                .claims(Map.of(
                        "email", email,
                        "roles", roles
                ))
                .signWith(SECRET_KEY)
                .compact();
    }
    
    // public static Claims parseJwt(String compactJwt) {
    //     try {
    //         Claims claims = Jwts.parser()
    //                 .verifyWith(SECRET_KEY)
    //                 .build()
    //                 .parseSignedClaims(compactJwt).getBody();

    //         return claims;

    //     } catch (JwtException ex) {
    //         System.out.println("JWT validation failed: " + ex.getMessage());
    //         return null;
    //     }
    // }

}
