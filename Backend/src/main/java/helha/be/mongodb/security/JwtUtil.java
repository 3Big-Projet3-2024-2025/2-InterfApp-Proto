package helha.be.mongodb.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Jwks;
import io.jsonwebtoken.security.RsaPrivateJwk;
import io.jsonwebtoken.security.RsaPublicJwk;

import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.Date;
import java.util.Map;


@Component
public class JwtUtil {

    private final static KeyPair pair = Jwts.SIG.RS256.keyPair().build();
    private final static RSAPublicKey pubKey = (RSAPublicKey) pair.getPublic();
    private final static RSAPrivateKey privateKey = (RSAPrivateKey) pair.getPrivate();

    RsaPrivateJwk privateJwk = Jwks.builder().key(privateKey).idFromThumbprint().build();
    RsaPublicJwk pubJwk = privateJwk.toPublicJwk();
    
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
                .signWith(privateKey)
                .compact();
    }

    // public static Claims verifyToken(String token) {
    //     try {
    //         // Parse the JWT using the public key to verify the signature
    //         return Jwts.parser()
    //                 .verifyWith(pubKey)
    //                 .build()
    //                 .parseSignedClaims(token)
                    
    //     } catch (SignatureException e) {
    //         throw new RuntimeException("Invalid JWT signature", e);
    //     } catch (Exception e) {
    //         throw new RuntimeException("Invalid JWT", e);
    //     }
    // }

}
