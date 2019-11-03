package pucmians.engSoftwareII.entity;


import lombok.*;
import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;


@Entity

@Table(name = "funcionario", schema = "public")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Funcionario  {


    @Id
    @GeneratedValue
    private Long idFuncionario;

    @Column
    private int idade;

    @Column
    private String nome;

    @Column
    private String CPF;

    @Column
    private String endereco;

    @Column
    private String funcao;






}