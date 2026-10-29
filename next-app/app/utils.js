import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Validation logic for phone numbers
export function validatePhoneNumber(phone, platform) {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
      // Block emergency numbers and short codes
        const blockedNumbers = ['911', '112', '999', '123', '000', '100', '101', '102'];
          if (blockedNumbers.includes(cleanPhone)) {
              return { valid: false, message: 'Emergency or short-code numbers are not allowed.' };
                }

                  // Basic length check
                    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
                        return { valid: false, message: 'Please enter a valid phone number (7 to 15 digits).' };
                          }

                            return { valid: true, cleanPhone };
                            }