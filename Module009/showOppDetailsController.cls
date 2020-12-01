public class showOppDetailsController {
   @AuraEnabled
   public static List<Opportunity> getOpportunityDetails(String accountId){
        List<Opportunity> listOfOppty = [Select id,Name,AccountId,StageName,CloseDate,Amount from Opportunity where AccountId=:accountId];
        if(listOfOppty.size()>0 && listOfOppty!=null){
            return listOfOppty;
        }
        else{
            return null;
        }
      
   }
   @AuraEnabled
   public static Opportunity getOpportunity(String opptyId){
        Opportunity oppty = [Select id,Name,AccountId,StageName,CloseDate,Amount,Account.Name from Opportunity where id=:opptyId];
        if(oppty!=null){
            return oppty;
        }
        else{
            return null;
        }
      
   }
}
