

import java.util.Objects;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;




public class Exercise1 {

   public static void main(String[] args) {
      CountryDao countryDao= InMemoryWorldDao.getInstance();
      //write your answer here
   
      List<City> highestCities = countryDao.findAllCountries().stream()
            .map(country -> country.getCities()
            .stream().max(Comparator.comparingInt(City::getPopulation))
            ).flatMap(Optional::stream).collect(Collectors.toList());

    
    highestCities.forEach(city -> 
    System.out.println(city.getName() + ":" + city.getPopulation())
    );
         
   }

}
