package pucmians.engSoftwareII.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pucmians.engSoftwareII.entity.Paciente;
import pucmians.engSoftwareII.service.PacienteService;

@RestController
@RequestMapping("/paciente")
public class PacienteAPI {

    @Autowired
    PacienteService pacienteService;


    @GetMapping(produces = "application/json")
    public @ResponseBody Iterable<Paciente> getUser(){
        return pacienteService.getPaciente();
    }


    @PostMapping
    public void save(@RequestBody Paciente paciente){
        pacienteService.save(paciente);

    }

    @DeleteMapping
    public void delete(@RequestBody Paciente paciente){
        pacienteService.delete(paciente);

    }



    @PatchMapping
    public void update(@RequestBody Paciente paciente){
        pacienteService.save(paciente);
    }
}
