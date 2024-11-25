package com.example.packagemanagement.service;

import com.example.packagemanagement.dto.TourismPackageDTO;
import com.example.packagemanagement.entity.TourismPackage;
import com.example.packagemanagement.factory.TourismPackageFactory;
import com.example.packagemanagement.repository.TourismPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TourismPackageService {

    @Autowired
    private TourismPackageRepository packageRepository;

    @Transactional
    public TourismPackageDTO createPackage(TourismPackageDTO packageDTO) {
        TourismPackage packageEntity = TourismPackageFactory.createPackage(
                packageDTO.getName(),
                packageDTO.getDescription(),
                packageDTO.getPrice(),
                packageDTO.getDuration(),
                packageDTO.getDestination()
        );

        packageEntity = packageRepository.save(packageEntity);

        packageDTO.setId(packageEntity.getId());
        return packageDTO;
    }

    public List<TourismPackageDTO> getAllPackages() {
        List<TourismPackage> packageEntities = packageRepository.findAll();
        return packageEntities.stream().map(this::convertToDTO).toList();
    }

    public Optional<TourismPackageDTO> getPackageById(Long id) {
        Optional<TourismPackage> packageEntity = packageRepository.findById(id);
        return packageEntity.map(this::convertToDTO);
    }

    @Transactional
    public TourismPackageDTO updatePackage(Long id, TourismPackageDTO packageDTO) {
        Optional<TourismPackage> existingPackage = packageRepository.findById(id);
        if (existingPackage.isPresent()) {
            TourismPackage packageEntity = existingPackage.get();
            packageEntity.setName(packageDTO.getName());
            packageEntity.setDescription(packageDTO.getDescription());
            packageEntity.setPrice(packageDTO.getPrice());
            packageEntity.setDuration(packageDTO.getDuration());
            packageEntity.setDestination(packageDTO.getDestination());

            packageRepository.save(packageEntity);
            return convertToDTO(packageEntity);
        }
        return null;
    }

    @Transactional
    public boolean deletePackage(Long id) {
        if (packageRepository.existsById(id)) {
            packageRepository.deleteById(id);
            return true;
        }
        return false;
    }

    private TourismPackageDTO convertToDTO(TourismPackage entity) {
        TourismPackageDTO dto = new TourismPackageDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setDuration(entity.getDuration());
        dto.setDestination(entity.getDestination());
        return dto;
    }
}
