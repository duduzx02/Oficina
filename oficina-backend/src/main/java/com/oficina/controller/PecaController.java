package com.oficina.controller;

import com.oficina.model.Peca;
import com.oficina.repository.PecaRepository;
import com.oficina.repository.ClienteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pecas")
@CrossOrigin(origins = "*")
public class PecaController {

    private final PecaRepository pecaRepository;
    private final ClienteRepository clienteRepository;

    public PecaController(PecaRepository pecaRepository, ClienteRepository clienteRepository) {
        this.pecaRepository = pecaRepository;
        this.clienteRepository = clienteRepository;
    }

    @GetMapping
    public List<Peca> listarTodas() {
        return pecaRepository.findAll();
    }

    @PostMapping("/{clienteId}")
    public Peca criar(@PathVariable Long clienteId, @RequestBody Peca peca) {
        return clienteRepository.findById(clienteId).map(cliente -> {
            peca.setCliente(cliente);
            return pecaRepository.save(peca);
        }).orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        pecaRepository.deleteById(id);
    }
}
