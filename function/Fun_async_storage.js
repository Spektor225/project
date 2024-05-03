import AsyncStorage from '@react-native-async-storage/async-storage';





const Fun__error_handler = (error) =>
{
  console.log(error)
}





export const Fun__set__AsyncStorage = async (name, value) => 
{
  try 
  {
    return await AsyncStorage.setItem(name, value)
  } 
  catch (err) 
  {
    Fun__error_handler(err)
  }
};





export const Fun__get__AsyncStorage = async (name) => 
{
  try 
  {
    return await AsyncStorage.getItem(name)
  } 
  catch (err) 
  {
    Fun__error_handler(err)
  }
};






