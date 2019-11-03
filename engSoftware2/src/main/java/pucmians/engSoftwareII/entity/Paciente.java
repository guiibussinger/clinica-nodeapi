package pucmians.engSoftwareII.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "paciente", schema = "public")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Paciente {


    @Id
    @GeneratedValue
    private Long idPaciente;

    @Column
    private int idade;

    @Column
    private String nome;

    @Column
    private String CPF;

    @Column
    private String endereco;







}