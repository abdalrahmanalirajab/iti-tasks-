


import java.util.Objects;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



import static java.lang.System.out;
import static java.util.Comparator.comparing;
import static java.util.stream.Collectors.maxBy;

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
