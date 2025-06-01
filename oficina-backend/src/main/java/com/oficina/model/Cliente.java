package com.oficina.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String telefone;
    private String placaVeiculo;
    private String modeloVeiculo;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Peca> pecas;
}
