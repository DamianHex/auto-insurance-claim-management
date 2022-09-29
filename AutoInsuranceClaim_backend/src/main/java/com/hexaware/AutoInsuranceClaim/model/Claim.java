package com.hexaware.AutoInsuranceClaim.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long claimId;
    private String vehicleYear;
    private String vehicleMake;
    private String vehicleModel;
    private String creationDate;
    private String lastModifiedDate;
    private String status;
    private String description;
    private long Gid;

}
