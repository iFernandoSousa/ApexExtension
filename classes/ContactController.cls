public with sharing class ContactController {
    @AuraEnabled
    public static Integer totalContacts(Id accountId) {
        return [SELECT COUNT() FROM Contact WHERE AccountId =: accountId];
    }
}