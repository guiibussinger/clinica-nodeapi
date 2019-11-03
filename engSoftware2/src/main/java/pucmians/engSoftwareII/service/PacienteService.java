package pucmians.engSoftwareII.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pucmians.engSoftwareII.entity.Funcionario;
import pucmians.engSoftwareII.entity.Paciente;
import pucmians.engSoftwareII.repository.FuncionarioRepository;
import pucmians.engSoftwareII.repository.PacienteRepository;

import javax.transaction.Transactional;


@Service
public class PacienteService {

    @Autowired
    PacienteRepository pacienteRepository;

    public Iterable<Paciente> getPaciente(){
        Iterable<Paciente> paciente = pacienteRepository.findAll();
        return paciente;
    }

    @Transactional
    public void save(Paciente paciente){
        pacienteRepository.save(paciente);
    }

    @Transactional
    public void delete(Paciente paciente){
        pacienteRepository.delete(paciente);
    }

    @Transactional
    public void update(Paciente paciente){
        pacienteRepository.save(paciente);
    }




}
