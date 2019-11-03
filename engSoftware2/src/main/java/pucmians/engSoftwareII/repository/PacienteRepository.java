package pucmians.engSoftwareII.repository;


import org.springframework.data.repository.CrudRepository;
import pucmians.engSoftwareII.entity.Funcionario;
import pucmians.engSoftwareII.entity.Paciente;

public interface PacienteRepository extends CrudRepository<Paciente, Long> {


}
