package com.Project.Management.HotelRepo;

import com.Project.Management.Entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer> {
}
