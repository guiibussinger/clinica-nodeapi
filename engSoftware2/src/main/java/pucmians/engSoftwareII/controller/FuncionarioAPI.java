package pucmians.engSoftwareII.controller;

import pucmians.engSoftwareII.entity.Funcionario;
import pucmians.engSoftwareII.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioAPI {

    @Autowired
    FuncionarioService funcionarioService;


    @GetMapping(produces = "application/json")
    public @ResponseBody Iterable<Funcionario> getUser(){
        return funcionarioService.getFuncionario();
    }


    @PostMapping
    public void save(@RequestBody Funcionario funcionario){
        funcionarioService.save(funcionario);

    }

    @DeleteMapping
    public void delete(@RequestBody Funcionario funcionario){
        funcionarioService.delete(funcionario);

    }



    @PatchMapping
    public void update(@RequestBody Funcionario funcionario){
        funcionarioService.save(funcionario);
    }
}
