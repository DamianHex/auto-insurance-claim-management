package com.hexaware.AutoInsuranceClaim.repository;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long> {
}
