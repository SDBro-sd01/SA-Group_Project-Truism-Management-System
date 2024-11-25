package com.Project.Management.DTO;

public class HotelDTO {

    private int hotelid;
    private String hotelname;
    private String facilities;
    private String location;
    private double pricing;

    public HotelDTO(int hotelid, String hotelname, String facilities, String location, double pricing) {
        this.hotelid = hotelid;
        this.hotelname = hotelname;
        this.facilities = facilities;
        this.location = location;
        this.pricing = pricing;
    }

    public HotelDTO() {
    }

    public int getHotelid() {
        return hotelid;
    }

    public void setHotelid(int hotelid) {
        this.hotelid = hotelid;
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
        return "HotelDTO{" +
                "hotelid=" + hotelid +
                ", hotelname='" + hotelname + '\'' +
                ", facilities='" + facilities + '\'' +
                ", location='" + location + '\'' +
                ", pricing=" + pricing +
                '}';
    }

}
