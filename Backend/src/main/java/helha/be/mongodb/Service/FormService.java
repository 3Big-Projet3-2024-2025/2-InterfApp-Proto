package helha.be.mongodb.Service;


import helha.be.mongodb.Model.Form;
import helha.be.mongodb.Repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class FormService {
    @Autowired
    private FormRepository formRepository;

    public Form saveForm(Form form) {
        return formRepository.save(form);
    }
    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    public Optional<Form> getFormById(String id) {
        return formRepository.findById(id);
    }

    public void deleteForm(String id) {
        formRepository.deleteById(id);
    }
}
