package pucmians.engSoftwareII.service;

import pucmians.engSoftwareII.entity.Funcionario;
import pucmians.engSoftwareII.repository.FuncionarioRepository;
        import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class FuncionarioService {

    @Autowired
    FuncionarioRepository funcionarioRepository;

    public Iterable<Funcionario> getFuncionario(){
        Iterable<Funcionario> funcionarios = funcionarioRepository.findAll();
        return funcionarios;
    }

    @Transactional
    public void save(Funcionario funcionarios){
        funcionarioRepository.save(funcionarios);
    }

    @Transactional
    public void delete(Funcionario funcionarios){
        funcionarioRepository.delete(funcionarios);
    }

    @Transactional
    public void update(Funcionario funcionarios){
        funcionarioRepository.save(funcionarios);
    }




}
