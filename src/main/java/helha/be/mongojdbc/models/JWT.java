package helha.be.mongojdbc.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JWT {

    private String accessToken;
    private String refreshToken;
}
