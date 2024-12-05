package helha.be.mongodb.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String email;
    private String username; 
    private String password;
    private List<String> roles;
}
