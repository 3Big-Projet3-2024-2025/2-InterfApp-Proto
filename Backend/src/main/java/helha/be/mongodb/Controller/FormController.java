package helha.be.mongodb.Controller;
import helha.be.mongodb.Model.Form;
import helha.be.mongodb.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/forms")
@CrossOrigin(origins = "*") // Permettre Angular d'accéder aux endpoints
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping
    public ResponseEntity<Form> createForm(@RequestBody Form form) {
        return ResponseEntity.ok(formService.saveForm(form));
    }

    @GetMapping
    public ResponseEntity<List<Form>> getAllForms() {
        return ResponseEntity.ok(formService.getAllForms());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Form> getFormById(@PathVariable String id) {
        return formService.getFormById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteForm(@PathVariable String id) {
        formService.deleteForm(id);
        return ResponseEntity.noContent().build();
    }
}