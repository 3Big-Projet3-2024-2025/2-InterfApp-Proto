package helha.be.mongodb.Service;

import helha.be.mongodb.Model.Form;

import helha.be.mongodb.Model.Reponse;
import helha.be.mongodb.Repository.ReponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReponseService {
    @Autowired
    private ReponseRepository reponseRepository;

    public Reponse saveReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }
    public List<Reponse> getAllReponses() {
        return reponseRepository.findAll();
    }

    public Optional<Reponse> getReponseById(String id) {
        return reponseRepository.findById(id);
    }

    public void deleteReponse(String id) {
        reponseRepository.deleteById(id);
    }
}
