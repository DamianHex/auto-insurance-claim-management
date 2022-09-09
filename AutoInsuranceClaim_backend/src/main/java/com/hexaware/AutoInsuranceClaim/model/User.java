package com.hexaware.AutoInsuranceClaim.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String streetAddress;
    private String city;
    private String state;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Claim> claims;
}
