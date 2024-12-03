package helha.be.mongodb.Controller;

import helha.be.mongodb.Model.Reponse;
import helha.be.mongodb.Service.ReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reponses")
public class ReponseController {

    @Autowired
    private ReponseService reponseService;

    @PostMapping
    public ResponseEntity<Reponse> createReponse(@RequestBody Reponse reponse) {
        Reponse savedReponse = reponseService.saveReponse(reponse);
        return ResponseEntity.ok(savedReponse);
    }

    @GetMapping
    public ResponseEntity<List<Reponse>> getAllReponses() {
        List<Reponse> reponses = reponseService.getAllReponses();
        return ResponseEntity.ok(reponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reponse> getReponseById(@PathVariable String id) {
        Optional<Reponse> reponse = reponseService.getReponseById(id);
        return reponse.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReponse(@PathVariable String id) {
        Optional<Reponse> reponse = reponseService.getReponseById(id);
        if (reponse.isPresent()) {
            reponseService.deleteReponse(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

