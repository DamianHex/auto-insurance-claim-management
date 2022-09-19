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
    private long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String streetAddress;
    private String city;
    private String state;
    private String zip;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Claim> claims;

//    public void addClaims(Claim claim) {
//        this.claims.add(claim);
//        System.out.println("Claim has been added!");
//    }
}
