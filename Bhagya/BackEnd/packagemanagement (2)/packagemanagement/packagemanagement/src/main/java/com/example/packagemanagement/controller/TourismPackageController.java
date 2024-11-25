package com.example.packagemanagement.controller;

import com.example.packagemanagement.dto.TourismPackageDTO;
import com.example.packagemanagement.service.TourismPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/packages")
public class TourismPackageController {

    @Autowired
    private TourismPackageService packageService;

    @PostMapping
    public ResponseEntity<TourismPackageDTO> createPackage(@RequestBody TourismPackageDTO packageDTO) {
        TourismPackageDTO createdPackage = packageService.createPackage(packageDTO);
        return ResponseEntity.ok(createdPackage);
    }

    @GetMapping
    public ResponseEntity<List<TourismPackageDTO>> getAllPackages() {
        List<TourismPackageDTO> packages = packageService.getAllPackages();
        return ResponseEntity.ok(packages);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TourismPackageDTO> getPackageById(@PathVariable Long id) {
        Optional<TourismPackageDTO> packageDTO = packageService.getPackageById(id);
        return packageDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TourismPackageDTO> updatePackage(@PathVariable Long id, @RequestBody TourismPackageDTO packageDTO) {
        TourismPackageDTO updatedPackage = packageService.updatePackage(id, packageDTO);
        return updatedPackage != null ? ResponseEntity.ok(updatedPackage) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable Long id) {
        boolean deleted = packageService.deletePackage(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
