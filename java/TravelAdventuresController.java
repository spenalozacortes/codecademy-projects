package com.codecademy.plants.controllers;

import com.codecademy.plants.entities.Adventure;
import com.codecademy.plants.repositories.AdventureRepository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/traveladventures")
public class TravelAdventuresController {

  private final AdventureRepository adventureRepository;

  public TravelAdventuresController(AdventureRepository adventureRepo) {
    this.adventureRepository = adventureRepo;
  }

  // Add controller methods below:
  @GetMapping()
  public Iterable<Adventure> getAdventures() {
    Iterable<Adventure> adventures = this.adventureRepository.findAll();
    return adventures;
  }

  @GetMapping("/bycountry/{country}")
  public Iterable<Adventure> getByCountry(@PathVariable String country) {
    Iterable<Adventure> adventures = this.adventureRepository.findByCountry(country);
    return adventures;
  }

  @GetMapping("/bystate")
  public Iterable<Adventure> getByState(@RequestParam String state) {
    Iterable<Adventure> adventures = this.adventureRepository.findByState(state);
    return adventures;
  }

  @PostMapping()
  public Adventure addAdventure(@RequestBody Adventure adventure) {
    return this.adventureRepository.save(adventure);
  }
  
}
