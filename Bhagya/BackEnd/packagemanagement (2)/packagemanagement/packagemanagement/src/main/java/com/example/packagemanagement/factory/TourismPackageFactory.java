package com.example.packagemanagement.factory;

import com.example.packagemanagement.entity.TourismPackage;

public class TourismPackageFactory {

    public static TourismPackage createPackage(String name, String description, double price, int duration, String destination) {
        TourismPackage packageEntity = new TourismPackage();
        packageEntity.setName(name);
        packageEntity.setDescription(description);
        packageEntity.setPrice(price);
        packageEntity.setDuration(duration);
        packageEntity.setDestination(destination);

        switch (name.toLowerCase()) {
            case "adventure tours":
                packageEntity.setDescription("Explore thrilling adventure tours with mountain treks and safaris.");
                break;
            case "city tours":
                packageEntity.setDescription("Visit the best cities with guided city tours and local experiences.");
                break;
            case "beach holidays":
                packageEntity.setDescription("Relax on stunning beaches with all-inclusive beach holiday packages.");
                break;
            case "camping":
                packageEntity.setDescription("Enjoy nature with exciting camping trips and outdoor adventures.");
                break;
            case "cultural events":
                packageEntity.setDescription("Experience the best cultural events, festivals, and local heritage.");
                break;
            default:
                throw new IllegalArgumentException("Unknown package type: " + name);
        }

        return packageEntity;
    }
}

