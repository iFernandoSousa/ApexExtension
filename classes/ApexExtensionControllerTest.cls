@IsTest
public class ApexExtensionControllerTest {
    @IsTest
    public static void apexExtensionTest() {
        String query = 'SELECT Id FROM User';
        List<SObject> result = ApexExtensionController.executeSOQL(query);
        
        System.assert(result.size() > 0);
    }
}
