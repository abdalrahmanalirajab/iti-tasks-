


import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Comparator;
public class Exercise5 {

    public static void main(String[] args) {
                CountryDao countryDao = InMemoryWorldDao.getInstance();
        CityDao cityDao = InMemoryWorldDao.getInstance();
        City biggestCapital =
            countryDao.findAllCountries().stream()
                .map(country -> country.getCities().stream()
                    .filter(city -> city.getId() == country.getCapital())
                        .findFirst() 
                )
                .flatMap(Optional::stream)
                .max(Comparator.comparingInt(City::getPopulation))
                .orElse(null);
        System.out.println(biggestCapital);
    }

}