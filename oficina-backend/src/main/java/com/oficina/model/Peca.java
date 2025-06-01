package com.oficina.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Peca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Enumerated(EnumType.STRING)
    private NivelUrgencia nivelUrgencia;

    private String observacoes;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
