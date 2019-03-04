public with sharing class ApexExtensionController {
    @AuraEnabled
    public static List<sObject> executeSOQL(String query) {
        return Database.query(query);
    }
}