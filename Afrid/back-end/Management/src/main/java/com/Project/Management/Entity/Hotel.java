package com.Project.Management.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Hotel")
public class Hotel {

    @Id
    @Column(name = "Hotel_Id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "Hotel_Name", length = 50)
    private String hotelname;

    @Column(name = "Facilities", length = 100)
    private String facilities;

    @Column(name = "Location", length = 80)
    private String location;

    @Column(name = "Price", length = 50)
    private double pricing;

    public Hotel(String hotelname, String facilities, String location, double pricing) {
        this.id = id;
        this.hotelname = hotelname;
        this.facilities = facilities;
        this.location = location;
        this.pricing = pricing;
    }

    public Hotel() {
    }

    public int getHotelid() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname;
    }

    public String getFacilities() {
        return facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getPricing() {
        return pricing;
    }

    public void setPricing(double pricing) {
        this.pricing = pricing;
    }

    @Override
    public String toString() {
        return "Hotel{" +
                "id=" + id +
                ", hotelname='" + hotelname + '\'' +
                ", facilities='" + facilities + '\'' +
                ", location='" + location + '\'' +
                ", pricing=" + pricing +
                '}';
    }

}
