

import java.util.Comparator;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.Objects;
import java.util.Optional;
import java.util.List;

public class Exercise2 {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
  //      write your answer here
    List<City> cities = countryDao.getAllContinents().stream()
            .map(continent -> countryDao.findAllCountries().stream()
                .filter(country -> country.getContinent().equals(continent))
                .flatMap(country -> country.getCities().stream())
                .max(Comparator.comparingInt(City::getPopulation))
                ).flatMap(Optional::stream).collect(Collectors.toList());
        System.out.println(cities);

    }

}


